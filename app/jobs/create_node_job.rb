class CreateNodeJob < Struct.new(:lat, :lon, :tags, :user, :client, :source)
  def self.enqueue(lat, lon, tags, user, source)
    raise "user not app authorized" unless user.app_authorized? # implies user.access_token.present?

    client = Rosemary::OauthClient.new(user.access_token)
    new(lat, lon, tags, user, client, source).tap do |job|
      Delayed::Job.enqueue(job)
    end
  end

  def perform
    raise ArgumentError.new("Client cannot be nil") if client.nil?
    raise ArgumentError.new("User cannot be nil") if user.nil?

    logger.info "CreateNodeJob -------------------------->"
    logger.info "User: #{user.try(:id)}"

    changeset = api.find_or_create_open_changeset(user.changeset_id, "Modified via wheelmap.org")
    user.update_attribute(:changeset_id, changeset.id)

    api.create(node, changeset)

    Counter.increment(source)
    user.increment!(:create_counter)
  end

  def node
    @node ||= Rosemary::Node.new(:lat => lat, :lon => lon, :tag => tags)
  end

  def api
    @api ||= Rosemary::Api.new(client)
  end

  def logger
    Delayed::Worker.logger
  end

  def enqueue(job)
  end

  def before(job)
  end

  def success(job)
  end

  def error(job, e)
    HoptoadNotifier.notify(e, :action => 'perform',
                              :component => 'CreateNodeJob',
                              :parameters => {
                                :node => node.inspect,
                                :user => user.inspect,
                                :client => client.inspect
                              })
  end

  def after(job)
  end

end
