class PerformancesController < ApplicationController

    def index
        perfs = Performance.all
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
