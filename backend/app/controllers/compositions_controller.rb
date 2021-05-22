class CompositionsController < ApplicationController

    def index
        comps = Composition.all
        render json: CompositionSerializer.new(comps).to_serialized_json
    end

    def show
        if params[:id]
            comp = Composition.find_by(id: params[:id])
            if comp
                render json: CompositionSerializer.new(comp).to_serialized_json
            else
                render json: { message: "Id not found." }
            end
        else
            render json: { message: "No Id given." }
        end
    end
end
