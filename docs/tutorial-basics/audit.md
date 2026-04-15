---
sidebar_position: 3
---

# Canton Network quickstart installation Audit 

## Prerequisites
1. It has too much explanation which is not recommended to be in a prerequisites, mainly the section where it explained (The CN Quickstart is a  Dockerized application)
2. This section has a formatting issue becaue items are not properly structured as a list.
3. Missing explanations for each prerequisite, example: Tools like Curl, Direnv, and Nix are listed without context and readers are not told why each tool is needed, which reduces onboarding clarity.

4. Nix download support” is misplaced
It looks like a standalone section rather than part of the Nix requirement.
The flow breaks because installation instructions are separated from the requirement.

5. The Nix in the list of other requirements alsoe refers to `Windows users must install and use WSL 2 with administrator privileges.` but its nto clear for a user to know but of how it was arranged.

6. JDK 17 or higher is required but its not stated on the prerequisites.

7. You need to have docker installed and running before you start the tutorial but it was not stated here.

8. It didnt state that you need to install this `dpm` 

## Fast path installation
1. The first sentence here is would create room for confusion, "If you are familiar with the prerequisites" a user will be expecting something like, " if you have all the requirements started above in the **prerequisites** section

2. Having two instructions doing same thing on a particular page is not recommended, becaue you wil have to update both of them as changes come which will create room for outdated content, so its recommended to have one instruction.

## Step-by-step instructions
1. The response for the **clone from Github** is an image its not recommended because sometimes users want to copy and secondly it didnt indicate that below is the response too.

2. The lack of numbering or using a listed component might create confusiong, because if you use numbers like 1,2,3 for each step it will be very clear where to start and end, but what we have now, clarity if not there.

3. This step which is in the `fast path` is missing and this makes it difficult to work cd into the quickstart subdirectory: `cd quickstart`.

#### Deploy a validator on LocalNet
3. This is not clear because it was not stated that after running the command `make setup` the next stape thats follows is you will be aksed on your terminal the following `Disable Observability. Enable OAuth2. Leave the party hint blank to use the default and disable TEST MODE.`

4. There is also a formating issue becasue after you "Disable Observability. Enable OAuth2. Leave the party hint blank to use the default and disable TEST MODE." you dont know if the text below is an explanation or another step to follow and also the text looks clustered toether, which is recommened to be added in a `Note callout`.

5. The steps inside this section requires listing for more clarity which it is lacking.

#### Connecting to the Local Canton Nodes
6. The steps inside this section requires listing for more clarity which it is lacking.

## Installation error

### 1. First error 
When i try to set up the Canton network locally in my system
After cloning the quickstart 
```shell
git clone https://github.com/digital-asset/cn-quickstart.git
```
I got this error in my vscode
```shell
JDK 17 or higher is required. Please set a valid Java home path to 'java.jdt.ls.java.home' setting or JAVA_HOME environment variable. Or ensure a valid Java executable is in your PATH.
```

Now i decided to proceed to see where this will be requested, now when i got to the section where i will type this command 
```shell
Make setup
```
 I got this error
```shell
./gradlew configureProfiles --no-daemon --console=plain --quiet
The operation couldn’t be completed. Unable to locate a Java Runtime.
Please visit http://www.java.com for information on installing Java.
```
### How i resolved it.
I installed Java JDK17 on my system

### 2. I got this error > Task :daml:compileDaml FAILED

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':daml:compileDaml'.
> A problem occurred starting process 'command 'dpm''

### How i resolved it:
I went to this link to learn how to install it https://docs.digitalasset.com/build/3.4/dpm/dpm.html
by running this command
```shell
curl https://get.digitalasset.com/install/install.sh | sh
```
It fixed the issue