class CreateCompositions < ActiveRecord::Migration[6.1]
  def change
    create_table :compositions do |t|
      t.string :name
      t.string :composer_lastname
      t.string :composer_firstname
      t.integer :year_composed

      t.timestamps
    end
  end
end
