class PerformanceSerializer

    def initialize(perf_object)
        @perf = perf_object
    end
    
    def to_serialized_json
        options = {
            except: [:updated_at, :created_at]
        }
        @perf.to_json(options)
    end

end