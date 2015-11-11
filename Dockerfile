FROM alpine:latest

RUN apk update
RUN apk add ruby-io-console ruby-bundler mysql

RUN bundle config --global frozen 1

RUN mkdir -p /wheelmap
WORKDIR /wheelmap

ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock

COPY config/database.DOCKER.yml config/database.yml
COPY config/open_street_map.SAMPLE.yml config/open_street_map.yml

RUN bundle install

ADD . .

ENV RAILS_ENV development
# Can't run against 'remote' environments
#RUN bundle exec rake db:create:all db:migrate db:seed

EXPOSE 3000
CMD ["bundle", "exec", "rails", "server"]

