class PerformancesController < ApplicationController

    def index
        if params[:organization_id]
            perfs = Organization.find(params[:organization_id]).performances
        else
            perfs = Performance.all
        end

        render json: PerformanceSerializer.new(perfs).to_serialized_json
    end

    def show
        if params[:id]
            perf = Performance.find_by(id: params[:id])
            if perf
                render json: PerformanceSerializer.new(perf).to_serialized_json
            else
                render json: { message: "Id not found." }
            end
        end
    end

end
