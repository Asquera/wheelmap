# encoding: UTF-8
require 'spec_helper'
describe Poi do
  fixtures :node_types


  let! :node_type do
    FactoryGirl.create(:node_type, :osm_key => :shop, :osm_value => :alcohol, :identifier => :alcohol)
  end

  describe 'associations' do
    it { should have_many :provided_pois }
    it { should have_many(:providers).through(:provided_pois) }
  end

  context "initialization" do
    it "should accept strings for lat/lon" do
      p = Poi.new :lat => "13.5", :lon => "54.3"
      p.lat.should == "13.5".to_f
      p.lon.should == "54.3".to_f
      p.geom.should == Poi.rgeo_factory_for_column(:geom).point("54.3".to_f, "13.5".to_f)
    end
  end

  describe 'validations' do
    subject { FactoryGirl.build(:poi) }
    it { should be_valid }

    it "should validate presence of name for new node" do
      node = subject
      node.name = nil
      node.should_not be_valid
    end

    it "should node validate presence of name for existing node" do
      node = subject
      node.save!
      node.name = nil
      node.should be_valid
    end

    it "is not be valid without existing node type" do
      subject.tags = {'name' => 'a_name', 'wheelchair' => 'yes'}
      subject.type = :invalid
      subject.node_type_id = nil
      subject.should_not be_valid
      subject.type = 'alcohol'
      subject.should be_valid
    end
  end

  context 'osm stuff' do
    subject { FactoryGirl.build(:poi, :tags => { 'wheelchair' => 'yes', 'street' => "Sesame street" }) }

    it 'osm_type identifies types properly' do
      Poi.new(:osm_id => 1).osm_type.should eq('node')
      Poi.new(:osm_id => -1).osm_type.should eq('way')
    end
  end

  context "inital state" do
    subject { Poi.new }
    it { should_not be_relevant }

    it "is initially nil" do
      subject.type.should be_nil
    end
  end

  context "type" do
    let (:poi) { Poi.new :name => "foo", :lat => 52.0, :lon => 13.0 }

    # check each of the types offered in the create-form leads to a valid poi
    Tags.keys.map(&:to_s).each do |k|
      it "#{k} is a valid type" do
        poi.type = k
        poi.should be_valid
      end
    end
  end

  context "address attributes" do

    Poi::DELEGATED_ADDR_ATTRIBUTES.each do |attr|

      it "has virtual getter for address tag #{attr}" do
        p = FactoryGirl.build(:poi)
        p.tags["addr:#{attr}"] = "horst"
        p.send(attr).should == "horst"
      end

      it "has virtual setter for address tag #{attr}" do
        p = FactoryGirl.build(:poi)
        p.send "#{attr}=", "horst"
        p.tags["addr:#{attr}"].should == "horst"
      end
    end

  end

  context "other tag based attributes" do
    names = [:phone, :website]

    names.each do |attr|
      it "has virtual getters for #{attr}" do
        p = FactoryGirl.build(:poi)

        p.tags["#{attr}"] = "horst"
        p.send(attr).should == "horst"
      end

      it "has virtual setters for #{attr}" do
        p = FactoryGirl.build(:poi)
        p.send "#{attr}=", "horst"
        p.tags["#{attr}"].should == "horst"
      end
    end
  end

  context "toilet tag based attributes" do

    it "has virtual getters for wheelchair_toilet" do
      p = FactoryGirl.build(:poi)

      p.tags["toilets:wheelchair"] = "yes"
      p.send(:wheelchair_toilet).should == "yes"
    end

    it "has virtual setters for toilet" do
      p = FactoryGirl.build(:poi)
      p.send "wheelchair_toilet=", "yes"
      p.tags["toilets:wheelchair"].should == "yes"
    end
  end

  context "json rendering" do
    context "for osm" do
      REQUIRED_KEYS = [:id, :lat, :lon]

      REQUIRED_KEYS.each do |name|
        it "has key and value '#{name}'" do
          p = FactoryGirl.create(:poi)
          attributes = p.as_api_response(:osm)
          attributes[name].should_not be_blank
        end
      end

      it "renders addr data mapped to tags" do
        h = {
          :wheelchair => "yes",
          :street => "Mittelweg",
          :housenumber => "99",
          :city => "Entenhausen",
          :postcode => "98976",
          :phone => "+49 30 123456",
          :website => "http://foo.bar.com"
        }

        p = FactoryGirl.create(:poi, h)
        attributes = p.as_api_response(:osm).as_json

        tags = attributes['tag']
        tags['wheelchair'].should == h[:wheelchair]
        tags['addr:street'].should == h[:street]
        tags['addr:housenumber'].should == h[:housenumber]
        tags['addr:postcode'].should == h[:postcode]
        tags['addr:city'].should == h[:city]
        tags['phone'].should == h[:phone]
        tags['website'].should == h[:website]
      end

      it "renders version and  positive id" do
        h = {
          :id => -99,
          :wheelchair => "yes",
          :version => 7
        }

        p = FactoryGirl.create(:poi, h)
        attributes = p.as_api_response(:osm).as_json

        tags = attributes['tag']
        tags['wheelchair'].should == h[:wheelchair]
        attributes['id'].should == 99
        attributes['version'].should == 7
      end

    end

  end

  context "64 bit" do

    let :poi do
      Poi.new(:osm_id => -4294967934).tap do |p|
        p.lat = 52.0
        p.lon = 13.4
        p.version = 1
        p.type = 'restaurant'
        p.name = "White bull"
      end
    end

    it "should save and load poi with 64 bit signed id" do
      poi.save!

      Poi.exists?(-4294967934).should be_true

      # If the primary key column does not support 64 bit values,
      # the node id is saved with the highest 32 bit signed int
      # which is -2147483648
      Poi.exists?(-2147483648).should be_false
    end

  end

  context "unicode" do

    it "should not escape latin characters" do
      Poi.escape_search_string('Latin').should eql 'Latin'
    end

    it "should escape utf characters that are made up of 2 bytes" do
      Poi.escape_search_string('Müller').should eql 'M\\xc3\\xbcller'
    end

    it "should escape utf characters that are made up of 3 bytes" do
      Poi.escape_search_string('선소 (Seonso)').should eql '\\xec\\x84\\xa0\\xec\\x86\\x8c (Seonso)'
    end
  end

  context "url" do

    subject { FactoryGirl.build(:poi, :website => 'www.example.com') }

    it "should provide absolute url with protocol" do
      subject.website_with_protocol.should eql "http://www.example.com"
    end
  end

  context "similar pois" do

    subject { FactoryGirl.create(:poi, :node_type => node_type, :lat => 51.5, :lon => 13.4, :tags => { 'wheelchair' => 'yes', 'street' => "Sesame street" }) }

    let :different_node_type do
      @different_node_type ||= FactoryGirl.create(:node_type, :osm_key => :amenity, :osm_value => :cinema, :identifier => :cinema)
      subject.node_type_id.should_not eql @different_node_type.id
      @different_node_type
    end

    let! :distant_poi do
      @distant_poi ||= FactoryGirl.create(:poi, :node_type => node_type, :lat => 51.5004, :lon => 13.4004, :tags => { 'wheelchair' => 'yes', 'street' => "Sesame street" })
    end

    let! :close_poi do
      @close_poi ||= FactoryGirl.create(:poi, :node_type => node_type, :lat => 51.5002, :lon => 13.4002, :tags => { 'wheelchair' => 'yes', 'street' => "Sesame street" })
    end

    let! :different_poi do
      @different_poi ||= FactoryGirl.create(:poi, :node_type => different_node_type, :lat => 51.5002, :lon => 13.4002, :tags => { 'wheelchair' => 'yes', 'street' => "Sesame street" })
      @different_poi.type = 'cinema'
      @different_poi.save!
      @different_poi.reload
    end

    let! :different_wheelchair do
      @different_wheelchair ||= FactoryGirl.create(:poi, :node_type => node_type, :lat => 51.5002, :lon => 13.4002, :tags => { 'wheelchair' => 'no', 'street' => "Sesame street" })
      @different_wheelchair.wheelchair = 'no'
      @different_wheelchair.save
      @different_wheelchair
    end

    it "should not include pois with different node types" do
      subject.node_type_id.should_not eql different_poi.node_type_id
      subject.similar_pois.map(&:osm_id).should_not include(different_poi.osm_id)
    end

    it "should not include different wheelchair status" do
      subject.status.should_not eql different_wheelchair.status
      subject.similar_pois.map(&:osm_id).should_not include(different_wheelchair.osm_id)
    end

    it "should not include itself" do
      subject.similar_pois.map(&:osm_id).should_not include(subject.osm_id)
    end

    it "should include distant_poi" do
      subject.similar_pois.map(&:osm_id).should include(distant_poi.osm_id)
    end

    it "should include close_poi" do
      subject.similar_pois.map(&:osm_id).should include(close_poi.osm_id)
    end

    it "should include distant_poi in sorted list" do
      subject.sorted_similar_pois.map(&:osm_id).should include(distant_poi.osm_id)
    end

    it "should include close_poi in sorted list" do
      subject.sorted_similar_pois.map(&:osm_id).should include(close_poi.osm_id)
    end

    it "should order similar pois by distance" do
      sorted_ids = subject.sorted_similar_pois.map(&:osm_id)
      sorted_ids.index(close_poi.osm_id).should < sorted_ids.index(distant_poi.osm_id)
    end

  end
end
