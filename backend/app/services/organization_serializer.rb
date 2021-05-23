class OrganizationSerializer

    def initialize(org_object)
        @org = org_object
    end

    def to_serialized_json
        options =  {
            include: {
                performances: {
                    only: [:performance_year],
                    include: {
                        composition: {
                            only: [:name]
                        }
                    }
                }
            },
            except: [:updated_at, :created_at]
        }
        @org.to_json(options)
    end

end