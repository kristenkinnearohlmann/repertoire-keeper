class PerformanceCompositionsController < ApplicationController

    def index
        # /performances/:performance_id/performance_compositions
        if params[:performance_id]
            perfcomps = Performance.find(params[:performance_id]).performance_compositions
        else
            perfcomps = PerformanceComposition.all
        end
        render json: PerformanceCompositionSerializer.new(perfcomps).to_serialized_json
    end

    def destroy
        raise params.inspect
    end

end
