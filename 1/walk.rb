N = [0,  1]
E = [1,  0]
S = [0, -1]
W = [-1, 0]

$HEADINGS = [N, E, S, W] # order matters because of clever tricks!

def cur_heading
  $HEADINGS[0]
end

def turn(direction) # direction is string 'R' or 'L' (shrug
  $HEADINGS = $HEADINGS.rotate(direction == 'R' ? 1 : -1)
end

def walk(coords, distance) # distance is integer
  coords[0] += cur_heading[0] * distance
  coords[1] += cur_heading[1] * distance
end

def main(instructions) 
  coords = [0, 0]

  instructions.each { |instruction|
    direction = instruction[0]
    distance  = instruction[1..-1].to_i

    turn direction
    walk coords, distance
  }

  return coords[0] + coords[1]
end

instructions = [
'L4', 'L1', 'R4', 'R1', 'R1', 'L3', 'R5', 'L5', 'L2', 'L3', 'R2', 'R1', 'L4', 'R5', 'R4', 'L2', 'R1', 'R3', 'L5', 'R1', 'L3', 'L2', 'R5', 'L4', 'L5', 'R1', 'R2', 'L1', 'R5', 'L3', 'R2', 'R2', 'L1', 'R5', 'R2', 'L1', 'L1', 'R2', 'L1', 'R1', 'L2', 'L2', 'R4', 'R3', 'R2', 'L3', 'L188', 'L3', 'R2', 'R54', 'R1', 'R1', 'L2', 'L4', 'L3', 'L2', 'R3', 'L1', 'L1', 'R3', 'R5', 'L1', 'R5', 'L1', 'L1', 'R2', 'R4', 'R4', 'L5', 'L4', 'L1', 'R2', 'R4', 'R5', 'L2', 'L3', 'R5', 'L5', 'R1', 'R5', 'L2', 'R4', 'L2', 'L1', 'R4', 'R3', 'R4', 'L4', 'R3', 'L4', 'R78', 'R2', 'L3', 'R188', 'R2', 'R3', 'L2', 'R2', 'R3', 'R1', 'R5', 'R1', 'L1', 'L1', 'R4', 'R2', 'R1', 'R5', 'L1', 'R4', 'L4', 'R2', 'R5', 'L2', 'L5', 'R4', 'L3', 'L2', 'R1', 'R1', 'L5', 'L4', 'R1', 'L5', 'L1', 'L5', 'L1', 'L4', 'L3', 'L5', 'R4', 'R5', 'R2', 'L5', 'R5', 'R5', 'R4', 'R2', 'L1', 'L2', 'R3', 'R5', 'R5', 'R5', 'L2', 'L1', 'R4', 'R3', 'R1', 'L4', 'L2', 'L3', 'R2', 'L3', 'L5', 'L2', 'L2', 'L1', 'L2', 'R5', 'L2', 'L2', 'L3', 'L1', 'R1', 'L4', 'R2', 'L4', 'R3', 'R5', 'R3', 'R4', 'R1', 'R5', 'L3', 'L5', 'L5', 'L3', 'L2', 'L1', 'R3', 'L4', 'R3', 'R2', 'L1', 'R3', 'R1', 'L2', 'R4', 'L3', 'L3', 'L3', 'L1', 'L2'
]

puts "distance: #{main(instructions)}\n"
