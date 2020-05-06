#!/bin/bash
#####
# Author: Matthew Zygowicz
# 
# Format: tamagotchi [action]
PREVIOUS_TIME=$(head -n 1 ./last_run)
CURRENT_TIME=`date +%s`
BIRTHDATE=$(head -n 1 ./birthdate)
LAST_EAT_TIME=$(head -n 1 ./last_eat)
AGE_IN_MILI=$(($CURRENT_TIME-$BIRTHDATE))
HEALTH=$(head -n 1 ./health)


echo $CURRENT_TIME > ./last_run

echo "Invoking Action:" $1 

healthy () {
  echo "I am healthy right now."
}

ok () {
  echo "I am just OK right now."
}

hurt () {
  echo " I am hurt right now"
}

hungry () {
  echo "I am hungry right now."
}

gettingOld () {
  echo "Not sure if I am long for this world"
}

feed () {
  echo $LAST_EAT_TIME > ./last_eat
  echo "Yum yum yum, thanks for the food!"
}

status () {
  echo "Time: $CURRENT_TIME"
  echo "Last Time: $PREVIOUS_TIME"
  echo "Birthdate: $BIRTHDATE"
  echo "Age In Mili: $AGE_IN_MILI"
  echo "Health: $HEALTH"
  echo "Last Fed: $LAST_EAT_TIME"
}

createNew() {
  echo "Creating a new tamagotchi!"
  BIRTHDATE=$CURRENT_TIME
  AGE_IN_MILI=$(($CURRENT_TIME-$BIRTHDATE))
  HEALTH=100
  echo $CURRENT_TIME > ./last_run
  echo $HEALTH > ./health  
  echo $CURRENT_TIME > ./birthdate
  echo $LAST_EAT_TIME > ./last_eat
}

# Get previous state
if [[ -z "$HEALTH" || $HEALTH -le 0 ]];
then
  createNew
fi

if [[ $HEALTH -ge 80 ]];
then
  healthy
elif [[ $HEALTH -ge 50 ]];
then
  ok
else [[ $HEALTH -ge 20]];
then 
  hurt
fi


# do action
if [[ $1 = "feed"]];
then
  feed
fi

# get new state


if [[ $HEALTH -ge 80 ]];
then
  healthy
elif [[ $HEALTH -ge 50 ]];
then
  ok
else [[ $HEALTH -ge 20]];
then 
  hurt
fi


status