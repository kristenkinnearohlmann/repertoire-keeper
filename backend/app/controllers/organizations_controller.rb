class OrganizationsController < ApplicationController

    def index
        orgs = Organization.all
        render json: OrganizationSerializer.new(orgs).to_serialized_json
    end

    def show
        puts params
        if params[:id]
            org = Organization.find(params[:id])
            render json: OrganizationSerializer.new(org).to_serialized_json
        else
            render json: { message: "Id not found." }
        end
    end
end
