class StaticController < ApplicationController
    def home
        render json: { message: "Welcome to Repertoire Keeper" }
    end
end