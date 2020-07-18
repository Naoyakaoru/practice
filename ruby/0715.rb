module F
  def fly
    puts "fly in module"
  end
end

class Animal
  def fly
    puts "fly in animal"
  end
end

class Cat < Animal
  include F
end

kitty = Cat.new
kitty.fly

p Cat.ancestors 