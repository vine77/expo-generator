#!/usr/bin/env node

import { Command } from '@commander-js/extra-typings'

import app from './app.js'

export default async function main() {
  const program = new Command()

  program.command('app <name>').action((name: string) => {
    app({ name })
  })

  program
    .command('component <name>')
    .allowUnknownOption()
    .action((name: string) => {
      const argsIndex = process.argv.indexOf('component') + 2
      const otherArgs = process.argv.slice(argsIndex)
      const argsString = otherArgs.join(' ')
      console.log(`Creating component: ${name} with args: ${argsString}`)
    })

  await program.parseAsync(process.argv)
}

main()
