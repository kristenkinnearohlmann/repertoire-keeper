# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

org_1 = Organization.create(name: "Saint Paul Civic Symphony",org_type: "orchestra")
org_2 = Organization.create(name: "Metropolitan Symphony Orchestra", org_type: "orchestra")