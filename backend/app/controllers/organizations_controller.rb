class OrganizationsController < ApplicationController

    def index
        orgs = Organization.all
        render json: OrganizationSerializer.new(orgs).to_serialized_json
    end

    def show
        if params[:id]
            org = Organization.find_by(id: params[:id])
            if org
                render json: OrganizationSerializer.new(org).to_serialized_json
            else
                render json: { message: "Id not found." }
            end
        else
            render json: { message: "No Id given." }
        end
    end
    
end
