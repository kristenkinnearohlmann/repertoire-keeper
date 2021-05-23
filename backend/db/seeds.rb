# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Organizations
org_1 = Organization.create(name: 'Saint Paul Civic Symphony',org_type: 'orchestra', year_founded: 1945, url: 'https://spcsmusic.org/', org_descr: 'The Saint Paul Civic Symphony, founded in 1945, provides free concerts throughout Saint Paul and the surrounding community. The orchestra is an autonomous, nonprofit organization made up of volunteers from a variety of backgrounds. It is funded by membership contributions, audience donations, grants, and fundraising activities.')

org_2 = Organization.create(name: 'Metropolitan Symphony Orchestra', org_type: 'orchestra', year_founded: 1982, url: 'https://msomn.org/', org_descr: 'The mission of the MSO is to perform outstanding symphony concerts for diverse audiences throughout the Twin Cities metropolitan area. Our core values are: to invite new and diverse audiences to share the power and energy of live symphony concerts in convenient neighborhood venues; to perform the full spectrum of symphonic music and encourage artistic growth in our volunteer players; and to work with host organizations to present and promote symphonic performances in their communities.')

# Compositions
comp_1 = Composition.create(name: 'Symphony No. 6 "Pastoral"', composer_lastname: 'Beethoven', composer_firstname: 'Ludwig van', year_composed: 1808)

comp_2 = Composition.create(name: 'Botticelli Triptych', composer_lastname: 'Respighi', composer_firstname: 'Ottorino', year_composed: 1927)

comp_3 = Composition.create(name: 'Symphony No. 9 in D minor, Op. 125', composer_lastname: 'Beethoven', composer_firstname: 'Ludwig van', year_composed: 1824)

comp_4 = Composition.create(name: 'Symphony No. 4', composer_lastname: 'Brahms', composer_firstname: 'Johannes', year_composed: 1884)

comp_5 = Composition.create(name: 'Boléro', composer_lastname: 'Ravel', composer_firstname: 'Maurice', year_composed: 1928)

comp_6 = Composition.create(name: 'Peter and the Wolf Op. 67', composer_lastname: 'Prokofiev', composer_firstname: 'Sergei', year_composed:1936)

comp_7 = Composition.create(name: 'Symphony No. 8 in G major, Op. 88, B. 163', composer_lastname: 'Dvořák', composer_firstname: 'Antonín', year_composed: 1889)

comp_8 = Composition.create(name: 'In the Steppes of Central Asia', composer_lastname: 'Borodin', composer_firstname: 'Alexander', year_composed: 1880)

comp_9 = Composition.create(name: 'Symphonic Dances from "West Side Story"', composer_lastname: 'Bernstein', composer_firstname: 'Leonard', year_composed: 1960)

comp_10 = Composition.create(name: 'The Year 1812 Solemn Overture, Op. 49', composer_lastname: 'Tchaikovsky', composer_firstname: 'Pyotr Ilyich', year_composed: 1880)

comp_11 = Composition.create(name: 'Festive Overture in A major, Op. 96', composer_lastname: 'Shostakovich', composer_firstname: 'Dmitri', year_composed: 1947)

# Performances

# # SPCS
org_1.performances.create(performance_year: 2016, composition_id: comp_6.id)
org_1.performances.create(performance_year: 2017, composition_id: comp_8.id)
org_1.performances.create(performance_year: 2018, composition_id: comp_5.id)
org_1.performances.create(performance_year: 2019, composition_id: comp_1.id)
org_1.performances.create(performance_year: 2020, composition_id: comp_9.id)


# # MSO
org_2.performances.create(performance_year: 2016, composition_id: comp_1.id)
org_2.performances.create(performance_year: 2017, composition_id: comp_10.id)
org_2.performances.create(performance_year: 2018, composition_id: comp_9.id)
org_2.performances.create(performance_year: 2019, composition_id: comp_2.id)