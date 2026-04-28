import { useEffect, useState } from "react";
import { getFundingResources } from "../../api/strapi.ts";

type FundingItem = {
  grant_name?: string;
  description?: string;
  min_grant_amount?: number;
  max_grant_amount?: number;
  time_period?: string;
  eligibility?: string;
  past_awards?: string;
  grant_site?: string;
};

export default function FundingsExample() {
  // Store the list of cohorts from the API.
  const [fundings, setFundings] = useState<FundingItem[]>([]);

  // Track whether the request is still in progress.
  const [loading, setLoading] = useState(true);

  // Store any error message if the fetch fails.
  const [error, setError] = useState("");

  useEffect(() => {
    // Create an async function inside useEffect.
    async function loadFundings() {
      try {
        // Clear old errors before starting a new request.
        setError("");

        // Ask our API helper for the data.
        const data = await getFundingResources();
        console.log(data);
        // Save the results into component state.
        setFundings(data as FundingItem[]);
      } catch (err: unknown) {
        // Save a readable error message.
        setError(err instanceof Error ? err.message : "Something went wrong.");
      } finally {
        // Stop the loading state whether success or failure.
        setLoading(false);
      }
    }

    // Run the fetch one time when the component mounts.
    loadFundings();
  }, []);

  // Show loading text while the request is running.
  if (loading) {
    return <p>Loading funding resources...</p>;
  }

  // Show an error message if the request failed.
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Show a friendly message if no records exist yet.
  if (fundings.length === 0) {
    return <p>No funding resources found yet.</p>;
  }

  // Render the data once it exists.
  return (
    <div>
      <h1>Strapi API example: Funding Resources</h1>
      <ul>
        {fundings.map((f, idx) => {
          const grantName = f.grant_name ?? "Unknown Name";
          const description = f.description ?? "";
          const timePeriod = f.time_period ?? "";
          const minAmount = f.min_grant_amount;
          const maxAmount = f.max_grant_amount;
          const eligibility = f.eligibility;
          const pastAwards = f.past_awards ?? "";
          const site = f.grant_site;

          return (
            <li key={idx}>
              <h2>
                Name: {grantName}, {timePeriod}
              </h2>
              <p>{description}</p>
              {minAmount ||
                (maxAmount && (
                  <p>
                    Amount: {minAmount}-{maxAmount}
                  </p>
                ))}
              <h3>Eligibility:</h3>
              <p>{eligibility}</p>
              <h3>Past Awards: {pastAwards}</h3>
              <h3>
                Site: <a href={site}>Site Link</a>
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
