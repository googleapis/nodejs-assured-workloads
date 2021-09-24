// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent) {
  // [START assuredworkloads_v1_generated_AssuredWorkloadsService_ListWorkloads_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Parent Resource to list workloads from.
   *  Must be of the form `organizations/{org_id}/locations/{location}`.
   */
  // const parent = 'abc123'
  /**
   *  Page size.
   */
  // const pageSize = 1234
  /**
   *  Page token returned from previous request. Page token contains context from
   *  previous request. Page token needs to be passed in the second and following
   *  requests.
   */
  // const pageToken = 'abc123'
  /**
   *  A custom filter for filtering by properties of a workload. At this time,
   *  only filtering by labels is supported.
   */
  // const filter = 'abc123'

  // Imports the Assuredworkloads library
  const {AssuredWorkloadsServiceClient} = require('@google-cloud/assuredworkloads').v1;

  // Instantiates a client
  const assuredworkloadsClient = new AssuredWorkloadsServiceClient();

  async function listWorkloads() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await assuredworkloadsClient.listWorkloadsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listWorkloads();
  // [END assuredworkloads_v1_generated_AssuredWorkloadsService_ListWorkloads_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
