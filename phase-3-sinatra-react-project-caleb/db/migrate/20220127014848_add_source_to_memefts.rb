class AddSourceToMemefts < ActiveRecord::Migration[6.1]
  def change
    add_column :memefts, :src, :string
  end
end
