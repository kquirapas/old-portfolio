
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
    name: "Rust: dado the Daily Todo",

    month: "June",
    
    day: "15",

    year: "2022",
    
    network: "CLI Tooling",

    description: "A command line tool to manage your daily tasks",

    role: "Rust Engineer",

    thumbnail: "/assets/experiments/dado/dado.png",

    content: `

# Note

It's a WIP. I'll turn it into a TUI (Terminal User Interface) eventually.

# Why?

I like how cli tables made with comfy_table look so I decided to make the typical Todo list program with comfy_table. (I first saw comfy_table from Foundry-rs)

![Sample Usage](/assets/experiments/dado/dado2.png)
###### Photo of sample usage

# Description

A command line tool to manage your daily tasks.

# Usage

Check if it's installed correctly
\`dado --version\`

Add a task to the end of the list
\`dado add "<short task description>"\`

Remove the task at a certain index number
\`dado remove <index_of_task>\`

Toggle between **pending** and **done** for a task at a cetain index number
\`dado toggle <index_of_task>\`

Show current tasks
\`dado list\`

# main.rs 

\`\`\`rust

use clap::{Parser, Subcommand};

mod dado;
// use dado::add;

#[derive(Parser, Debug)]
#[clap(author, version, about, long_about = None)]
#[clap(propagate_version = true)]
struct Args {
    #[clap(subcommand)]
    command: Commands,
}

#[derive(Subcommand, Debug)]
enum Commands {
    Add {
        #[clap(value_parser)]
        task: String
    },
    Remove {
        #[clap(value_parser)]
        task_num: usize
    },
    Toggle {
        #[clap(value_parser)]
        task_num: usize
    },
    List
}

// TODO: Resolve paths properly
// TODO: Properly eliminate the out of nowhere \n in .dado when list goes to 0
// TODO: Fix case when removing to 0 tasks
const SAVEFILE: &str = "/home/kirby/.dado";

fn main() {
    let cli = Args::parse();

    match &cli.command {
        Commands::Add { task } => { 
            match dado::add(SAVEFILE, task.as_str()) {
                Err(why) => {
                    panic!("Failed to add to {}: {}", SAVEFILE, why);
                },
                Ok(_) => println!("Successfully added")
            };
        },
        Commands::Remove { task_num } => { 
            match dado::remove(SAVEFILE, &task_num) {
                Err(why) => {
                    panic!("Failed to remove Task#{} from {}: {}", task_num, SAVEFILE, why);
                },
                Ok(_) => println!("Successfully removed")
            };
        },
        Commands::Toggle { task_num } => { 
            match dado::toggle(SAVEFILE, &task_num) {
                Err(why) => {
                    panic!("Failed to toggle Task#{} from {}: {}", task_num, SAVEFILE, why);
                },
                Ok(_) => println!("Successfully toggled")
            };
        },
        Commands::List => { 
            if let Err(why) = dado::list(SAVEFILE) {
                panic!("Failed to list from {}: {}", SAVEFILE, why);
            };
        },
    };
}
\`\`\`


# dado.rs 

\`\`\`rust

use std::io::{self, Read, Write};
use std::path::Path;
use std::collections::HashMap;
use std::fs::File;
use comfy_table::*;
use comfy_table::presets::UTF8_FULL;

fn display_tasks(filepath: &str) -> Result<(), io::Error> { 
    let mut file = match File::options()
        .read(true)
        .open(filepath) {
        Err(_) => {
            File::options()
                .read(true)
                .open(filepath)
                .expect("Failed to open file")
        },
        Ok(file) => file
    };

    // Get contents of file to string
    let mut contents = String::new();
    file.read_to_string(&mut contents)
        .expect("Failed to read to string");

    // Display contents of file in table
    let mut table = Table::new();

    // Hashmap for table coloring
    let mut status_to_color = HashMap::<&str, comfy_table::Color>::new();
    status_to_color.insert("done", Color::Green);
    status_to_color.insert("pending", Color::Red);

    table
        .load_preset(UTF8_FULL)
        .set_content_arrangement(ContentArrangement::Dynamic)
        .set_width(80)
        .set_header(vec![
            Cell::new("#").add_attribute(Attribute::Bold),
            Cell::new("Task").add_attribute(Attribute::Bold),
            Cell::new("Status").add_attribute(Attribute::Bold)
        ]);

    if contents != " " && contents != "\n"{
        // add rows if contents is not empty
        for (idx, line) in contents.trim().trim_matches('\n').split("\n").enumerate() {
            let cells = line.split(",").take(2).collect::<Vec<&str>>();

            let task = cells[0];
            let status = cells[1];

            table.add_row(vec![
                Cell::new(idx),
                Cell::new(task),
                Cell::new(status)
                    .fg(status_to_color[&status])
            ]);
        }
    }
    println!("{table}");

    Ok(())
}

pub fn add(filepath: &str, task: &str) -> Result<(), io::Error> {
    let mut file = match File::options()
        .read(true)
        .write(true)
        .open(filepath) {
            
        Err(_) => {
            File::options()
                .read(true)
                .write(true)
                .create(true)
                .open(filepath)
                .expect("Failed to create file")
        },
        Ok(file) => file
    };

    let mut contents = String::new();

    file.read_to_string(&mut contents)
        .expect("Failed to read to string");

    let mut task_trimmed: String = String::from(task.trim().trim_matches('\n'));
    task_trimmed.push_str(",pending\n");

    file.write(task_trimmed.as_bytes())
        .expect("Failed to write Add");

    display_tasks(filepath).expect("Expect: Failed to display tasks");

    Ok(())
}


pub fn remove<'a>(filepath: &'a str, task_num: &'a usize) -> Result<(), &'a str> {
    // First check if file exists
    if !Path::exists(Path::new(filepath)) {
        return Err("File does not exist");
    }

    let mut file = match File::options()
        .read(true)
        .open(filepath) {
            
        Err(_) => {
            File::options()
                .read(true)
                .create(true)
                .open(filepath)
                .expect("Failed to create file")
        },
        Ok(file) => file
    };

    let mut contents = String::new();

    file.read_to_string(&mut contents)
        .expect("Failed to read to string");

    let mut lines: Vec<&str> = contents.trim().trim_matches('\n').split("\n").collect();

    if lines.len() > *task_num {
        lines.remove(*task_num);

        let mut file = File::options()
            .read(true)
            .write(true)
            .truncate(true)
            .open(filepath)
            .expect("Failed to create file");

        let mut lines = lines.join("\n");
        lines.push_str("\n");
        file.write(lines.as_bytes())
            .expect("Failed to write after removal");

        display_tasks(filepath).expect("Expect: Failed to display tasks");

        Ok(())
    } else {
        Err("Task number out of bounds")
    }
}

pub fn toggle<'a>(filepath: &'a str, task_num: &'a usize) -> Result<(), &'a str> {
    // First check if file exists
    if !Path::exists(Path::new(filepath)) {
        return Err("File does not exist");
    }

    let mut file = match File::options()
        .read(true)
        .open(filepath) {
            
        Err(_) => {
            File::options()
                .read(true)
                .create(true)
                .open(filepath)
                .expect("Failed to create file")
        },
        Ok(file) => file
    };

    let mut contents = String::new();

    file.read_to_string(&mut contents)
        .expect("Failed to read to string");

    let mut lines: Vec<&str> = contents.trim().trim_matches('\n').split("\n").collect();

    if lines.len() > *task_num {
        let row = lines[*task_num].split(",").collect::<Vec<&str>>();
        let mut task = String::from(row[0]);
        let status = row[1];

        match status {
            "done" => task.push_str(",pending"),
            "pending" => task.push_str(",done"),
            _ => return Err("Unidentified status name in toggle()")
        };

        lines[*task_num] = task.as_str();

        let mut file = File::options()
            .read(true)
            .write(true)
            .truncate(true)
            .open(filepath)
            .expect("Failed to create file");

        let mut lines = lines.join("\n");
        lines.push_str("\n");
        file.write(lines.as_bytes())
            .expect("Failed to write after toggle");

        display_tasks(filepath).expect("Expect: Failed to display tasks");

        Ok(())
    } else {
        Err("Task number out of bounds")
    }
}

pub fn list(filepath: &str) -> Result<(), io::Error> {
    display_tasks(filepath).expect("Expect: Failed to display tasks");

    Ok(())
}
\`\`\`
`
}

const eIdx = Object.keys(experiments).map(i => parseInt(i)).sort((a, b) => a - b);

export {
  experiments,
  eIdx
};
