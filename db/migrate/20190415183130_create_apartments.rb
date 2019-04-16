class CreateApartments < ActiveRecord::Migration[5.2]
  def change
    create_table :apartments do |t|
      t.string :name
      t.string :address1
      t.string :address2
      t.integer :zipcode
      t.string :city
      t.string :state
      t.string :country
      t.integer :user_id
      t.timestamps
    end
  end
end
