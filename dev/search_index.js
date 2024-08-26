var documenterSearchIndex = {"docs":
[{"location":"alldocstrings/","page":"-","title":"-","text":"Modules = [LyoPronto]","category":"page"},{"location":"alldocstrings/#LyoPronto.calc_psub-Tuple{F} where F<:Number","page":"-","title":"LyoPronto.calc_psub","text":"calc_psub(T)\n\nCompute pressure (in Pascals) of sublimation at temperature T in Kelvin.\n\nFrom...somewhere else. Used in LyoPRONTO\n\n\n\n\n\n","category":"method"},{"location":"alldocstrings/#LyoPronto.gen_sol_conv_dim-NTuple{4, Any}","page":"-","title":"LyoPronto.gen_sol_conv_dim","text":"obj_tT_conv(KRp_prm, otherparams, u0, tTdat; tweight=1)\n\nEvaluate an objective function which compares model solution with KRp_prm to experimental data in tTdat.\n\notherparams contains: (hf0, c_solid, ρ_solution, Av, Ap, pch, Tsh)\nu0 is unitless, but with dimensions [cm, K].\ntweight gives the weighting (in K^2/hr^2) of the end of drying in the objective, as compared to the temperature error.\n\n\n\n\n\n","category":"method"},{"location":"alldocstrings/#LyoPronto.get_vial_radii-Tuple{String}","page":"-","title":"LyoPronto.get_vial_radii","text":"get_vial_radii(vialsize::String)\n\nReturn inner and outer radius for passed ISO vial size.\n\nUses a table provided by Schott, stored internally in a CSV.\n\n\n\n\n\n","category":"method"},{"location":"alldocstrings/#LyoPronto.get_vial_thickness-Tuple{String}","page":"-","title":"LyoPronto.get_vial_thickness","text":"get_vial_thickness(vialsize::String)\n\nReturn vial wall thickness for given ISO vial size.\n\nUses a table provided by Schott, stored internally in a CSV.\n\n\n\n\n\n","category":"method"},{"location":"alldocstrings/#LyoPronto.lumped_cap_rf-Tuple{Any, Any, Any}","page":"-","title":"LyoPronto.lumped_cap_rf","text":"function lumped_cap_rf(du, u, p, t)\n\nTODO: include all parameters TODO: handle dimensionality\n\n\n\n\n\n","category":"method"},{"location":"alldocstrings/#LyoPronto.make_outlines-Tuple{Any, Any}","page":"-","title":"LyoPronto.make_outlines","text":"make_outlines(dims, Vfill)\n\nReturn Plots.Shapes for vial and fill volume, with Unitful dimensions, for given vial dimensions. Convenience function for making some figures.\n\n\n\n\n\n","category":"method"},{"location":"alldocstrings/#LyoPronto.obj_tT_conv-Tuple{Any, Any, Any}","page":"-","title":"LyoPronto.obj_tT_conv","text":"obj_tT_conv(KRp_prm, gen_sol, tTdat; tweight=1)\n\nEvaluate an objective function which compares model solution with KRp_prm to experimental data in tTdat.\n\ntweight gives the weighting (in K^2/hr^2) of the end of drying in the objective, as compared to the temperature error.\n\n\n\n\n\n","category":"method"},{"location":"alldocstrings/#LyoPronto.tplotexperimental","page":"-","title":"LyoPronto.tplotexperimental","text":"tplotexperimental(time, T1, [T2, ...])\n\nPlot recipe for one or more experimentally measured product temperatures, all at same times.\n\n\n\n\n\n","category":"function"},{"location":"alldocstrings/#LyoPronto.tplotexpvw","page":"-","title":"LyoPronto.tplotexpvw","text":"tplotexpvw(time, temperature)\n\nPlot recipe for a set of experimentally measured vial wall temperatures.\n\n\n\n\n\n","category":"function"},{"location":"#LyoPronto.jl","page":"LyoPronto.jl","title":"LyoPronto.jl","text":"","category":"section"},{"location":"","page":"LyoPronto.jl","title":"LyoPronto.jl","text":"This is the mandatory index.md file that is the homepage of the documentation.","category":"page"},{"location":"#Subsection-name","page":"LyoPronto.jl","title":"Subsection name","text":"","category":"section"},{"location":"","page":"LyoPronto.jl","title":"LyoPronto.jl","text":"Test.","category":"page"}]
}
