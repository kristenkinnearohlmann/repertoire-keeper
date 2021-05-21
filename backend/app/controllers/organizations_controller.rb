class OrganizationsController < ApplicationController

    def index
        orgs = Organization.all
        render json: OrganizationSerializer.new(orgs).to_serialized_json
    end
end
