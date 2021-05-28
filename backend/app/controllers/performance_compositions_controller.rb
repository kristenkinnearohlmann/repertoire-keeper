class PerformanceCompositionsController < ApplicationController

    def index
        if params[:performance_id]
            perfcomps = Performance.find(params[:performance_id]).performance_compositions
        else
            perfcomps = PerformanceComposition.all
        end
        render json: PerformanceCompositionSerializer.new(perfcomps).to_serialized_json
    end

    # TODO: Refactor to simplify - error handling helpers and maybe call composition controller since this record wouldn't be created if not comp created
    def create
        if params[:performance_id]
            perf = Performance.find_by(id: params[:performance_id])
            if perf
                comp = Composition.create(performance_composition_params(:name, :composer_lastname, :composer_firstname, :year_composed))
                if comp
                    perfcomp = perf.performance_compositions.create(composition_id: comp.id)
                    render json: PerformanceCompositionSerializer.new(perfcomp).to_serialized_json
                else
                    render json: { message: "Composition not created." }
                end
            else
                render json: { message: "Performance not found." }
            end
        else
            render json: { message: "Performance not found." }
        end
    end

    def destroy
        perfcomp = PerformanceComposition.find(params[:id])
        perfcomp.destroy
        render json: {}
    end

    private

    def performance_composition_params(*args)
        params.require(:composition).permit(*args)
    end

end
