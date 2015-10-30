FROM ruby:2.2.3
# shamelessly copied from https://github.com/docker-library/rails/blob/9fb5d2b7e0f2e7029855028e07e86ab7ec54abaa/onbuild/Dockerfile
# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

RUN mkdir -p /wheelmap
WORKDIR /wheelmap

ONBUILD COPY Gemfile Gemfile
ONBUILD COPY Gemfile.lock Gemfile.lock
ONBUILD COPY config/database.SAMPLE.yml config/database.SAMPLE.yml
ONBUILD COPY . .
# thanks Debian/Ubuntu for putting Magick-config in the weirdest place ever
ENV PATH $PATH:/usr/lib/x86_64-linux-gnu/ImageMagick-6.8.9/bin-Q16/
RUN bundle install --verbose


#RUN apt-get update && apt-get install -y nodejs --no-install-recommends && rm -rf /var/lib/apt/lists/*
#RUN apt-get update && apt-get install -y mysql-client postgresql-client sqlite3 --no-install-recommends && rm -rf /var/lib/apt/lists/*

EXPOSE 3000
CMD ["bundle", "exec", "rails", "server"]


