# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_23_015832) do

  create_table "compositions", force: :cascade do |t|
    t.string "name"
    t.string "composer_lastname"
    t.string "composer_firstname"
    t.integer "year_composed"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "organizations", force: :cascade do |t|
    t.string "name"
    t.string "org_type"
    t.integer "year_founded"
    t.string "url"
    t.text "org_descr"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "performance_compositions", force: :cascade do |t|
    t.integer "performance_id", null: false
    t.integer "composition_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["composition_id"], name: "index_performance_compositions_on_composition_id"
    t.index ["performance_id"], name: "index_performance_compositions_on_performance_id"
  end

  create_table "performances", force: :cascade do |t|
    t.integer "performance_year"
    t.integer "organization_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["organization_id"], name: "index_performances_on_organization_id"
  end

  add_foreign_key "performance_compositions", "compositions"
  add_foreign_key "performance_compositions", "performances"
  add_foreign_key "performances", "organizations"
end
