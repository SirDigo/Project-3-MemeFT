class MemeftController < ApplicationController
    get "/memefts" do
        Memeft.all.to_json
    end

    post "/memefts" do
        Memeft.create(
            title: params[:title],
            price: params[:price],
            creator: params[:creator],
            owner: params[:owner],
            sale: params[:sale],
            user_id: params[:user_id],
            src: params[:src]
        ).to_json
    end

    patch "/memefts/:id" do
        memeft = Memeft.find(params[:id])
        memeft.update(
            owner: params[:owner],
            sale: params[:sale],
            user_id: params[:user_id]
        ).to_json
    end
end