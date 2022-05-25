
const experiments = {};

experiments["0"] = {
    name: "Image Generation",

    month: "May",
    
    day: "2",

    year: "2022",
    
    network: "Localhost",

    description: "Exploring the process of generating images with code for NFT collection drops. I first created the parts with Photoshop and eventually generating their combinations with Pillow and Python 3 code.",

    role: "Python3 Developer",

    thumbnail: "/assets/experiments/image-gen/output.png",

    content: `
# Generating Images

If you've ever wondered about how NFT projects generate their collection drops, this can be one of the ways to do it out of the many ways it can be done.


![Output of the Code](/assets/experiments/image-gen/output.png)
###### Photo of the output images

# Parts used in Image Generation

**Base Head**

![Head](/assets/experiments/image-gen/head.png)

**Eyes**

![Mouth](/assets/experiments/image-gen/eyes.png)

**Mouth**

![Mouth](/assets/experiments/image-gen/mouth.png)


# Python Code with Pillow

After installing and importing the Pillow (Image Manipulation) library into a virtual environment, I ran **./python3 main.py** with the code below.

\`\`\`python
  #!/bin/python

  from PIL import Image

  number_of_files = 3

  head = []
  eyes = []
  mouth = []

  for i in range(number_of_files):
      head.append(Image.open("./head/{}.png".format(i)))
      eyes.append(Image.open("./eyes/{}.png".format(i)))
      mouth.append(Image.open("./mouth/{}.png".format(i)))


  def merge(img1, img2):
      # knowing all of them are the same size
      width = img1.size[0]
      height = img1.size[1]

      output = Image.new("RGBA", (width, height))

      output.paste(img1, (0,0))
      output.paste(img2, (0,0), img2)

      return output

  # got lazy and just used for loops
  for h in range(len(head)):
      for e in range(len(eyes)):
          for m in range(len(mouth)):
              result = merge(head[h], eyes[e])
              result = merge(result, mouth[m])
              result.save('./output/{}{}{}.png'.format(h, e, m))
              print('Dont generating image {}{}{}'.format(h, e, m))
\`\`\`

# Output Images

It's expected to have *27 output combinations given 3 head, 3 eyes, and 3 mouth parts.*

![Output of the Code](/assets/experiments/image-gen/output.png)
###### Photo of the output images

`
}

experiments["1"] = {
    name: "Rust: TimeZone Tool",

    month: "May",
    
    day: "13",

    year: "2022",
    
    network: "Localhost",

    description: "Made a simple Rust CLI tool to help me in scheduling meetings for multiple timezone communities. It takes a certain GMT+8 time as an input then it shows me at what time the meeting will be for the our community's core team.",

    role: "Rust Engineer",

    thumbnail: "/assets/experiments/tz/tz.png",

    content: `
# Why?

I wanted to brush up on Rust so I decided to make a simple CLI tool to help me out with deciding on what time I'll be setting our meetings for the community.

![Sample Run](/assets/experiments/tz/tz.png)
###### Photo of sample run


# Code

\`\`\`rust
  use std::env;
  use std::io;
  use std::io::BufRead;
  use std::io::BufReader;
  use std::io::Write;
  use std::fs;

  fn main() {
    let args: Vec<String> = env::args().collect();

    for (pos, arg) in args.iter().enumerate() {
      if pos == 1 {
        print!("Enter GMT+8 in 24:00 time: ");
        io::stdout().flush().unwrap();

        let mut guess: String = String::new();

        io::stdin()
          .read_line(&mut guess)
          .expect("Failed to read line");

        let _base = guess.trim_end().parse::<i32>().unwrap();

        let f: fs::File = fs::File::open(arg).unwrap();
        let reader = BufReader::new(f);
        
        println!("[==24:00 FORMAT==]");
        for l in reader.lines() {
          let line = l.unwrap();
          let words = line.split_whitespace().take(2).collect::<Vec<&str>>();

          if let [name, offset] = &words[..] {
            let offset_float = offset.trim_end().parse::<f32>().unwrap() / 60.0;
            let result: f32 = _base as f32 + offset_float;
            let hours: i32 = result as i32;
            let minutes: f32 = (result - hours as f32) * 60.0;

            println!("{:0>2}:{:0<2}{:>10}", hours, minutes, name);
          }
        }
      }
    }
  }
\`\`\`
`
}

const eIdx = Object.keys(experiments).map(i => parseInt(i)).sort((a, b) => a - b);

export {
  experiments,
  eIdx
};
