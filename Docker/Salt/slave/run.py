import subprocess
import sys

# get som
print 'Number of arguments:', len(sys.argv), 'arguments.'
print 'Argument List:', str(sys.argv)

print('synchronizing')
print('bin/synchronize-config.sh config-' +  sys.argv[1])
print('bin/synchronize-exploded.sh')
print('bin/synchronize-summary.rb')
#subprocess.call(['bin/synchronize-config.sh config-' +  sys.argv[1]])
#subprocess.call(['bin/synchronize-exploded.sh'])
#subprocess.call(['bin/synchronize-summary.rb'])

print('stopping')
print('bin/stop-engine.sh engines/engine-' + sys.argv[2])
#subprocess.call(['bin/stop-engine.sh engines/engine-' + engine])

#print('restarting')
#subprocess.call(['bin/synchronize-webapps.sh engines/engine-' + engine])
#subprocess.call(['bin/start-engine.sh engines/engine-$engine' + engine])
#subprocess.call(['bin/synchronize-summary.rb'])

