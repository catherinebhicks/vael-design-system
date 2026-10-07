# Could someone else pick up Vael?

When I started rebuilding Vael as a personal project, I wanted to make the work accessible to someone who wasn't sitting next to me. A reviewer should be able to open the components, but a designer or engineer should also be able to understand how to use them.

The [published Storybook](https://catherinebhicks.github.io/vael-design-system/) gives people a way to inspect components and their documentation. The repository includes the React implementation, tokens, and guidance for running the project locally.

## The practical details

I documented the typography and icon dependencies, including their licenses, because those details can become a problem when someone tries to reproduce a design. The project uses IBM Plex and FontAwesome Free.

The [Figma library](https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System) provides the design side of the system. The repository's onboarding documentation explains how to work with Storybook and the design resources. I also documented how I use AI tools in the workflow, including where I stop and review the output.

I wrote the onboarding material with more than one kind of reader in mind. Someone reviewing the project may only want the live component catalog. Someone using it for a new product needs the tokens and guidance. Someone maintaining it needs to know how decisions are made and how changes get checked.

## Making the workflow understandable

The guide in `docs/onboarding/designing-with-an-llm.md` describes three activities:

1. Give the agent the existing system as context.
2. Design with the components and tokens already available.
3. Carry proposed changes between design and implementation, then review them.

I have taught design for years, and writing down a process is a useful test of whether I can explain it. If the only way to understand a workflow is to watch me do it, I probably need better documentation.

I also use Vael's patterns in other presentation and portfolio work. Those downstream uses give me places to find gaps in the library and bring the decisions back into the system.

There is still work to do around onboarding and verification. I would rather keep that visible than tell someone the system is finished. The Figma file, Storybook, repository, and documentation are available for people to inspect, and I can keep improving them as the project grows.
