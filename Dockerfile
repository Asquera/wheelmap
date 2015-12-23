FROM ruby:2.2.3

# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

RUN mkdir -p /wheelmap/config
WORKDIR /wheelmap

ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock

# thanks Debian/Ubuntu for putting Magick-config in the weirdest place ever
ENV PATH $PATH:/usr/lib/x86_64-linux-gnu/ImageMagick-6.8.9/bin-Q16/
# it'd be nice to have this be ONBUILD RUN to speed up building this container
# but bundle install seems to die unless it's just RUN
RUN bundle install

ENV RAILS_ENV development

VOLUME /wheelmap
EXPOSE 3000

ENTRYPOINT ["bundle", "exec"]
CMD ["rails", "server", "-b", "0.0.0.0"]
