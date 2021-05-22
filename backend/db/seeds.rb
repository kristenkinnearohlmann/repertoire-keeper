# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

org_1 = Organization.create(name: "Saint Paul Civic Symphony",org_type: "orchestra", year_founded: 1945, url: "https://spcsmusic.org/", org_descr: "The Saint Paul Civic Symphony, founded in 1945, provides free concerts throughout Saint Paul and the surrounding community. The orchestra is an autonomous, nonprofit organization made up of volunteers from a variety of backgrounds. It is funded by membership contributions, audience donations, grants, and fundraising activities.")
org_2 = Organization.create(name: "Metropolitan Symphony Orchestra", org_type: "orchestra", year_founded: 1982, url: "https://msomn.org/", org_descr: "The mission of the MSO is to perform outstanding symphony concerts for diverse audiences throughout the Twin Cities metropolitan area. Our core values are: to invite new and diverse audiences to share the power and energy of live symphony concerts in convenient neighborhood venues; to perform the full spectrum of symphonic music and encourage artistic growth in our volunteer players; and to work with host organizations to present and promote symphonic performances in their communities.")