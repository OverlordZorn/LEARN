# Autonomous Vehicles

## Self-Driving Cars
They're here, *Self-driving cars* are already looping through some of our roads. But they'll be everywhere soon enough.
Let's look at **how** they work before they become a part of everyday life.

### What are self-driving cars?
Self-Driving cars are just the cars we use on a daily basis, along with a lot of extra *sensors* and *computer software*.

### Autonomous vs Automatic

Self-driving cars are autonomous vehicles, meaning that they can make decisions independently.

On the other hand, *automatic* vehicles rely on specific conditions. If they change, they'll crash into any unexpected obstacles.

### Rules and obstacles

Driving involves deciphering the surroundingenvironment. You need to know what *signs mean* and how to *respect the rules*.

### Sensors

When we think about sensors, we think about recieving *feedback* from the external world.

For humans, the main sensor used when driving is *vision*.

### Cameras as sensors

The problem with using video cameras as sensors on a self-driving car is that video is 2D.

Translating a video stored in 2d into 3D makes things like *depth* and *distance* a callange to measure.

### Computer vision

There's an entire field of study called *computer vision* that focuses on making machines see the world like humans.

It's focused on using *machine learning* to decipher digital images. Right now it's not perfect, so other sensors are still required.

### Active sensors

Cameras recieve data through light, but other sensors can discover their environment in more active ways.

For example, *radar* and *lidar* work by emitting electromagnetic energy that bounces back to the sensors. We'll talk more about them later.

### Current state of motion.

Understanding their environment is one part of the equation. But self-driving cars also need to know their current *state of notion*.

After all, seeing a stop sign doesn't help unless you know how fast you are traveling and how to break **without** spilling coffee everywhere.

### GPS is one solution

GPS is one of the main ways to figure out a car's location, but it doesn't work wellin places with a low signal like tunnels.

We need another system that the car can fall back on.

### Odometry

One alternative that can take note of a car's *position* and *speed* over time is through *odometry*.

This is similar to how humans would count the number of steps to figure out the distance between two places.

### Wheel circumference

We just need to know the *circumference* of a wheel. That's juts the distance arond the wheel.

If a wheel turns fully once, it travels that distance. All we have to do is measure *how many times* a wheel turns to measure movement.

### Two wheels turn

If a wheel is `2.5 feet`in circumference, that means that after `2` turns it's travels `5 feet`.

### Internal mesurement unit

But odometry doesn't really help with things like acceleration, inclination or the direction the car is pointing towards.

For that, an *IMU* or *inertial mesurement unit* is used.

### What are IMUs?

IMUs are a combination of sensors like motion sensors that give the car data about its current state.

They can help figure out *acceleration*, *inclination* and if it's pointing towards magnetic North **without** the use of GPS.

```
Car acceleration = 10.7g
```

### Autonomy levels

All of these technologies combine to make a *self-driving car* find its way. But this doesn't mean it's ready to do everything by itself yet.

There are `6`different levels of *autonomy*, ranging from `0`to `5`. 
Level `0`means the system can only warn the driver of possible dangers.

### Level 5 autonomy

The other levels gradually give more control over the journey to the car.

The goal is to reach level `5`, where the car can do anything without human intervention. In that case, the steering wheel becomes **optional**.


## Radar & Lidar

Let's talk a abit about sensors like radar and lidar, how they work, and why they're important for self-driving cars.

### Etymology

What does it mean?

We've all heared about the word radar, but what does it actually mean?

Radar is an acronym for *RAdio Detection And Ranging*. This means it can detect objects and figure out whaat range, or distance, they are.

And yes, it's similar to the radio technology we use to listen to music or news.

### Active Sensor

Radar is great for self-driving cars because it's an *active* sensor.

The reason it's active is because it *produces* the very thing it measures: *radio waves*.

### It's like sonar, but different

Radar is like an echo or a submarine's sonar. It emits a sound and mesures how strong it is when it bounces back of objects.

Small changes in the sound are analyzed to determine nearby objects, their size, and distance.

Radar is like *sonar*, the only difference being that sonar uses *sound* to detect objects, while a radar uses *radio waves*.

### Radio waves

Radio waves work on the same principle. The radar emits them, they hit an object, and then they bounce back to the sensor.

The sensor can then compare the sent wave with the received wave to reach conclusions about the environment.

*Radio waves* are a type of electromagnetic energy. Don't worry about the term. You've experienced electromagnetic energy your whole life.

In fact, every color you've ever seen belongs to the *visible spectrum* of electromagnetic energy.

### Invisible

Radio waves are part of the electromagnetic spectrum but on the invisible side of it. They're there, even though our eyes can't detect it.

### Reflection

When a wave hits an object and bounces back, we say that the radio wave is *reflected*.

When it comes to reflection, there's one thing that influences it more than anyting else, and that's *frequency*.

### Frequency

Higher frequency means a stronger signal. Normal radio, for example broadcasts at a frequency near `100 MHz`.

Radar emit radio waves that are at least `1000`times stronger than that, which frequencies measured in GHz.

### Besides radar, there's

There's another sensor that self-driving car makers are working on improving, and that's *lidar*.

### Lidar

Lidar is an acronym for *LIght Detection and Ranging*. It's similar to radar but uses electromagnetic waves that are at a higher frequency.

Because of that, the wave are actually made out of light. This light, however, is not visible to the human eye.

### Lidar over long distances

Lidar can be very powerful. It's used consistently to measure long distances, like that from the Earth to the Moon.

### 360°

Lidar are usually mounted to the top of cars and spin in *360°*. This has a few advantages.

It's cost-effective because only one sensor is neede, while it still provides a wide range of coverage.

### Lidar's weakness

Lidar doesn't work well in unfavorable weather conditions such as rain and fog because the light source gets weaker.

Radar, on the other hand, is unaffected by such conditions.

### Lidar's strength

Lidar is more *accurate* than radar. It can even detect small gestures like a cyclist gesturing to make a left.

Radar wouldn't be able to pick that up.

### Ultimately, software is key

In the end, both systems have strenghs and weaknesses.

A good self-driving car comes down to its ability to combine information from all sensors and have intelligent software to make decisions.

## Software

### Sensor fusion

After the car has collected data from sensors, it's combines it to come to a logical conclusion about its state and the environment.

Combining all of this data is known as *sensor fusion*.

### Database

Before taking any action, the self-driving car needs to check its database to see if it's encountered a similar situation before.

### Data

The car compares the current data from its sensors with data gathered throughout millions of other miles traveled by itself and other cars.

All of this information has been previously processed with techniques such as *machine learning*.

### Path planning

The next step is figuring out what the car should do next. This process is called *path finding*.

The main problem with path finding is that the car is not alone on the road.

### Prediction

Self-driving cars need to predict the behavior of all drivers or participants in traffic.

That means detecting pedestrians or cyclists that a human driver might not be able to see.

### Freezing car problems

Getting prediction to work right is tricky because it could lead to a *freezing robot problem*. 

That's when the robot is too conservative and chooses not to take any action, in which case you might get stuck in traffic for hours.

### False alarms

For example, self-driving cars might see a pedestrian going on the road, estimate their speed and trajectory, and stop.

A hman would be able to see that it's a driver going to the side of their car to open the door. False alarms like these could be dangerous.

### Behavioural cloning

To counteract that, researchers are trying to make cars understand human behavior and copy their behavior in certain situations.

This allows for better predictions and safer roads.

### When?

We're not sure when self-driving cars will hit the road everywhere.

But when they will, they'll make our old cars obsolete.

