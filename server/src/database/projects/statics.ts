import { IProjectDocument } from "./types";

async function findByAge(
	after?: Date,
	before?: Date,
): Promise<Array<IProjectDocument>> {
	// Gather return value.
	let results: Array<IProjectDocument>
	if (after != null && before != null) {
		results = await this.find({
			creationDate: {
				$gte: after.toISOString(),
				$lte: before.toISOString(),
			}
		})
	}
	else if (after != null) {
		results = await this.find({
			creationDate: {
				$gte: after.toISOString(),
			}
		})
	}
	else if (before != null) {
		results = await this.find({
			creationDate: {
				$lte: before.toISOString(),
			}
		})
	}
	else {
		results = await this.find()
	}

	// Sorts the results in-place.
	results.sort((a, b) => (
		a.creationDate.getTime() - b.creationDate.getTime()
	))

	// Return the sorted results.
	return results
}

export {findByAge}
