class CreatePerformances < ActiveRecord::Migration[6.1]
  def change
    create_table :performances do |t|
      t.integer :performance_year
      t.references :organization, null: false, foreign_key: true
      t.references :composition, null: false, foreign_key: true

      t.timestamps
    end
  end
end
