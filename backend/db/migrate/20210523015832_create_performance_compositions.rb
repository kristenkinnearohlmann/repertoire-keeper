class CreatePerformanceCompositions < ActiveRecord::Migration[6.1]
  def change
    create_table :performance_compositions do |t|
      t.references :performance, null: false, foreign_key: true
      t.references :composition, null: false, foreign_key: true

      t.timestamps
    end
  end
end
