class CompositionSerializer

    def initialize(comp_object)
        @comp = comp_object
    end

    def to_serialized_json
        options =  {
            except: [:updated_at, :created_at]
        }
        @comp.to_json(options)
    end

end