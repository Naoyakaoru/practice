# 1. my_map
class Array
  def my_map
    result = []
    each do |x|
      result << yield(x)
    end
    return result
  end
end

p [1, 2, 3, 4, 5].my_map { |x| x * 2 }
# 印出 [2, 4, 6, 8, 10]

# 2,3,4. is_email? 目前僅先依題目需求，判定是否有單一個 "@" ，與在 "@" 後有至少1個 "."，尚無使用regexp
class String
  def is_email?
    if include?("@")
      if split("@")[1].include?(".") && split("@").length == 2
        return true
      end
    else
      return false
    end
  end
end

p "yuu@5xruby.tw".is_email?             
# 印出 true

p "yuu.kk@5xruby.tw".is_email?          
# 印出 true

p "what".is_email?                      
# 印出 false