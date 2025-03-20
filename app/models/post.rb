class Post < ApplicationRecord
    validates :title, presence: true, length: {maximum: 20}
    validates :startDate, presence: true
    validates :endDate, presence: true
    validates :scheduleMemo, length: {maximum: 500}
    validate :start_end_check
    
    def start_end_check
        if startDate.present? && endDate.present? && startDate > endDate
            errors.add(:endDate, "は開始日より前の日付を指定してください。")
        end
    end
end
