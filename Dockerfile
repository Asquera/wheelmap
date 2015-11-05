FROM ruby:2.2.3
# shamelessly copied from https://github.com/docker-library/rails/blob/9fb5d2b7e0f2e7029855028e07e86ab7ec54abaa//Dockerfile
# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

RUN mkdir -p /wheelmap
WORKDIR /wheelmap

ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock

COPY config/database.DOCKER.yml config/database.yml
COPY config/open_street_map.SAMPLE.yml config/open_street_map.yml

# thanks Debian/Ubuntu for putting Magick-config in the weirdest place ever
ENV PATH $PATH:/usr/lib/x86_64-linux-gnu/ImageMagick-6.8.9/bin-Q16/
# it'd be nice to have this be ONBUILD RUN to speed up building this container
# but bundle install seems to die unless it's just RUN
RUN bundle install

ADD . .

ENV RAILS_ENV development
# Can't run against 'remote' environments
#RUN bundle exec rake db:create:all db:migrate db:seed

EXPOSE 3000
#CMD ["bundle", "exec", "rails", "server"]
#debugging
CMD ["cat" "/etc/hosts"]


