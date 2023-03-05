from GailRiskCalculator import GailRiskCalculator
import numpy as np
import sys

gail = GailRiskCalculator()
gail.Initialize()


# order of input: CURRENT_AGE NBIOPS AGEMEN AGEFLB NUMREL HYPERPLASIA


[CURRENT_AGE, NBIOPS, AGEMEN, AGEFLB, NUMREL, HYPERPLASIA] = sys.argv[1:]

NBIOPS = int(NBIOPS)
AGEMEN = int(AGEMEN)
AGEFLB = int(AGEFLB)
NUMREL = int(NUMREL)
CURRENT_AGE = int(CURRENT_AGE)
HYPERPLASIA = 0 if HYPERPLASIA is None else 1 if HYPERPLASIA == 'true' else 0


AGECAT = 0 if CURRENT_AGE < 50 else 1


ever_have_biopsy = 0 if NBIOPS == 0 else 1

rhyp = np.float64(1)

risk_index = 1  # 1 for abs 2 for average

race = 1

projection_age = CURRENT_AGE + 5

risk = gail.CalculateRisk(risk_index,
                          CURRENT_AGE,
                          projection_age,
                          AGECAT,
                          NBIOPS,
                          AGEMEN,
                          AGEFLB,
                          ever_have_biopsy,
                          NUMREL,
                          HYPERPLASIA,
                          rhyp,
                          race)


print(round(risk, 4))
