<script>
</script>

<div class="h-screen flex">
	<!-- left nav bar -->
	<div class="flex-none w-64 p-5 flex flex-col justify-between bg-gray-100 border-r-2 shadow-lg">
		<div class="flex justify-between items-center">
			<h1 class="h1 font-bold text-2xl text-black">PaLM 2</h1>
			<button class="btn btn-sm btn-accent">New Chat</button>
		</div>

		<div class="flex flex-col space-y-2">
			<a href="/">Settings</a>
			<a href="/">Feedback</a>
			<a href="/">About & Privacy</a>
		</div>
	</div>
	<!-- Main -->
	<div class="flex flex-col w-screen mt-32 p-10 items-center justify-between">
		<!-- title -->
		<div class="flex flex-col mt-24">
			<h1 class="h1 text-8xl text-sky-600">PaLM 2</h1>
            <p class='text-sm w-96 tracking-wide'>PaLM 2 is a state-of-the-art language model with improved multilingual, reasoning and coding capabilities</p>
		</div>
		<!-- examples -->
		<div class='flex flex-col space-y-5'>
			<p>Examples</p>
			<div class="w-full flex space-x-10 justify-center">
				<a href='/' class="p-4 bg-gray-100 rounded-lg hover:bg-gray-300 w-80 text-center">
					<p>Write an email from bullet list</p>
                </a>
				<a href='/'  class="p-4 bg-gray-100 rounded-lg hover:bg-gray-300 w-80 text-center">
					<p>Code a snake game</p>
                </a>
				<a href='/'  class="p-4 bg-gray-100 rounded-lg hover:bg-gray-300 w-80 text-center">
					<p>Assist in a task</p>
                </a>
			</div>
		</div>
		<!-- chat input -->
		<div class="flex justify-center w-full mb-10">
			<form class="w-full">
				<label for="text-input" class="mb-2 text-sm font-medium text-black sr-only dark:text-white">
					Search
				</label>
				<div class="relative">
					<input
						type="search"
						id="text-input"
						class="w-full p-4 pl-5 pr-24 text-sm text-black border border-black rounded-lg bg-white"
						placeholder="What would you like to chat about?"
						required
					/>
					<button
						type="submit"
						class="block text-white absolute right-2.5 bottom-2.5 bg-accent hover:bg-accent font-medium rounded-lg text-sm px-4 py-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="w-3 h-3"
						>
							<path
								d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"
							/>
						</svg>
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
