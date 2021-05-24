class PerformanceCompositionSerializer

    def initialize(perfcomp_object)
        @perfcomp = perfcomp_object
    end

    def to_serialized_json
        options = {
            include: {
                performance: {
                    except: [:updated_at, :created_at]
                },
                composition: {
                    except: [:updated_at, :created_at]
                }
            },
            except: [:updated_at, :created_at]
        }
        @perfcomp.to_json(options)
    end

end