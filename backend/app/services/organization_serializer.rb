class OrganizationSerializer

    def initialize(org_object)
        @org = org_object
    end

    def to_serialized_json
        options =  {
            except: [:updated_at, :created_at]
        }
        @org.to_json(options)
    end

end