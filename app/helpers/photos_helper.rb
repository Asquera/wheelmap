module PhotosHelper

  def photo_tag(photo, format = :thumb)
    image_tag(photo.image.url(format).to_s, :class => format, :alt => photo.id, :size => '100x100')
  end

  def link_to_photo(link_name, photo)
    link_to link_name, :class => :thumb, :name => photo.id do
      photo_tag(photo)
    end
  end
end