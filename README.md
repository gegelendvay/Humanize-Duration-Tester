# Humanize Duration Tester
Small script for testing the humanize-duration npm package. You have the flexibility to specify custom timestamps, and by using various options, you can modify the output style. Moreover, you can include multiple timestamps to compare differences in units.

## Installation
1. Clone the repository
2. Install the dependencies: `npm install`
3. Run the script: `node .`

## Usage
You can modify the following information in the script:
1. Timestamps: You can specify one or more timestamps. See provided examples in the script.
2. Options: You can specify the options you want to use.

## Example
```
Timestamp: 2023-10-06
Options: {round: true, largest: 2}
```
Output: `28 days, 3 hours`