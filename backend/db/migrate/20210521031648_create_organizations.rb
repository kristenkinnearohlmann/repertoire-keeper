class CreateOrganizations < ActiveRecord::Migration[6.1]
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :org_type
      t.integer :year_founded
      t.string :url
      t.text :org_descr

      t.timestamps
    end
  end
end
