list = [1, 4, 2, 4, 6, 7, 8, 2, 3, 2, 1, 6]

t = 0
y = 0

list.each do |x|
  x > 3 && x % 2 == 0 ? t = t + x : t
end

puts list.select {|x| x > 3 && x % 2 == 0}.sum

puts t


def hello
  yield "wow"
end

hello do |n|
  p n
end

def test_two(x)
  if yield(x)
    puts "yes, it is 2"
  else
    puts "no, it is not 2"
  end
end

test_two(10) { |n|
  n == 2
}
p (1..100).select { |n| n.odd?}

# 做一個自己的select功能
def my_select(list)
  ans = []
  list.each do |x|
    if yield x
      ans << x
    end
  end
  return ans

end

a = [1, 2, 3, 4, 5]
p my_select([1,2,3,4,5]) { |i| i.odd? }
p [1, 2, 3, 4, 5].select { |x| x.odd? }

def my_map(list)
  result=[]
  list.each do |x|
    result << yield(x)
  end
  return result
end

p my_map([1, 2, 3, 4, 5]) { |x| x * 2 }

# 做一個自己的reject功能
def my_reject(list)
  ans = []
  list.each do |x|
    if not yield x
      ans << x
    end
  end
  return ans

end

a = [1, 2, 3, 4, 5]
p my_reject([1,2,3,4,5]) { |i| i.odd? }

list = [1, 2, 3, 4, 5]
double = Proc.new { |x| x * 2 }
p double[list]
p list.map(&double)

triple = -> (n) { n * 3 }
p list.map(&triple)

list1 = [1, 2, 3, 4, 5]
list2 = ["a", "b", "c"]
double = -> (x) { x * 2 }

p list1.select { |x| x.odd? }
p list1.select(&:odd?)


class How
  def good
    p "讚"
  end
end

great = How.new

great.good

class Animal
  def walk
    puts "走走走"
  end
  def eat
    puts "吃吃吃"
  end
  def initialize(name, age)
    @name = name
    @age = age
    puts "安安, 哇洗#{name}, 我今年#{age}歲!"
  end
  def self.all
    puts "hi"
  end
  def -
    puts "this is -"
  end
end

class Dog < Animal
end

class Cat < Animal
end

kitty = Cat.new("貓咪", 1)
bai = Cat.new("白熊",1)
kitty.eat

p kitty.-
p 2.-(1)

#可以看整個容器(Object)裡有哪些private method
p self.class.private_methods.sort

p self.class.protected_methods


Animal.all
Cat.all
# kitty.all

p Integer.superclass
p Numeric.superclass

p String.superclass