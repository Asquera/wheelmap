class AddFulltextIndexToPois < ActiveRecord::Migration
  def self.up
#    add_index :pois, :tags, :length => 10
    execute "CREATE FULLTEXT INDEX fulltext_index_pois_on_tags ON pois(tags)"
  end

  def self.down
    remove_index :pois, :tags
    remove_index :pois, :name => 'fulltext_index_pois_on_tags' rescue nil
  end
end