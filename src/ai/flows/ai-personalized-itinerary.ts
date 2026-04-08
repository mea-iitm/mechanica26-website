'use server';
/**
 * @fileOverview An AI agent for generating personalized festival itineraries.
 *
 * - generatePersonalizedItinerary - A function that handles the itinerary generation process.
 * - PersonalizedItineraryInput - The input type for the generatePersonalizedItinerary function.
 * - PersonalizedItineraryOutput - The return type for the generatePersonalizedItinerary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const PersonalizedItineraryInputSchema = z.object({
  userInterests: z
    .array(z.string())
    .describe('A list of keywords or phrases describing the user\'s interests (e.g., "Robotics", "AI in Mechanics", "CAD Design").'),
  fullSchedule: z
    .string()
    .describe(
      'The full festival schedule as a detailed string. Each event should include its day, time, title, a brief description, and location, clearly separated for easy parsing by an AI.'
    ),
});
export type PersonalizedItineraryInput = z.infer<typeof PersonalizedItineraryInputSchema>;

// Output Schema
const ItineraryEventSchema = z.object({
  day: z.string().describe('The day of the event (e.g., "Day 1").'),
  time: z.string().describe('The time of the event (e.g., "10:00 AM").'),
  title: z.string().describe('The title of the event.'),
  description: z.string().describe('A brief description of the event.'),
  location: z.string().describe('The location where the event takes place.'),
  relevanceScore: z.number().min(0).max(10).describe('A score from 0 to 10 indicating how relevant this event is to the user\'s interests, where 10 is highly relevant.'),
});

const PersonalizedItineraryOutputSchema = z.object({
  itinerary: z
    .array(ItineraryEventSchema)
    .describe('A personalized list of events tailored to the user\'s interests, ordered chronologically.'),
});
export type PersonalizedItineraryOutput = z.infer<typeof PersonalizedItineraryOutputSchema>;

/**
 * Generates a personalized festival itinerary based on user interests and the full event schedule.
 * @param input - Contains the user's interests and the complete festival schedule.
 * @returns A personalized itinerary with relevant events.
 */
export async function generatePersonalizedItinerary(
  input: PersonalizedItineraryInput
): Promise<PersonalizedItineraryOutput> {
  return personalizedItineraryFlow(input);
}

// Prompt definition
const itineraryPrompt = ai.definePrompt({
  name: 'itineraryPrompt',
  input: {schema: PersonalizedItineraryInputSchema},
  output: {schema: PersonalizedItineraryOutputSchema},
  prompt: `You are an AI assistant designed to create personalized festival itineraries for participants of MECHANICA 2026.
Your goal is to help users efficiently plan their time by providing a tailored schedule of events based on their interests.

Here are the user's interests:
{{{userInterests}}}

Here is the full festival schedule:
{{{fullSchedule}}}

Carefully review the user's interests and the full schedule.
Identify events that are highly relevant to the user's interests.
For each relevant event, extract its day, time, title, a brief description (if available in the schedule), and location from the full schedule.
Assign a relevance score from 0 (not relevant) to 10 (extremely relevant) to each selected event. Only include events with a relevance score of 7 or higher.
Structure the output as a chronological list of these highly relevant events.
If no events match the user's interests with a score of 7 or higher, return an empty itinerary array.`,
});

// Flow definition
const personalizedItineraryFlow = ai.defineFlow(
  {
    name: 'personalizedItineraryFlow',
    inputSchema: PersonalizedItineraryInputSchema,
    outputSchema: PersonalizedItineraryOutputSchema,
  },
  async (input) => {
    const {output} = await itineraryPrompt(input);
    return output!;
  }
);
